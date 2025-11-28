const {spawnSync} = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, args){
  const r = spawnSync(cmd, args, {encoding:'utf8'});
  if(r.error) throw r.error;
  return r.stdout || '';
}

try{
  // gather unreachable blob hashes
  const out = run('git', ['fsck','--lost-found','--no-reflogs','--unreachable']);
  const hashes = [];
  out.split(/\n/).forEach(line => {
    const m = line.match(/unreachable blob (\w+)/);
    if(m) hashes.push(m[1]);
  });

  if(hashes.length === 0){
    console.log('No unreachable blobs found.');
    process.exit(0);
  }

  const restored = [];
  for(const h of hashes){
    let content = '';
    try{ content = run('git', ['show', h]); } catch(e){ continue; }
    if(!content) continue;
    const lines = content.split(/\n/);
    const first = (lines[0]||'').trim();
    if(!first.startsWith('// ')) continue;
    const fpath = first.replace(/^\/\//, '').trim();
    if(!fpath) continue;
    // skip product data edits and public images
    if(fpath.startsWith('src/data/products') || fpath.startsWith('public/')) {
      console.log('Skipping', fpath);
      continue;
    }
    const rest = lines.slice(1).join('\n');
    const dir = path.dirname(fpath);
    try{ fs.mkdirSync(dir, {recursive:true}); fs.writeFileSync(fpath, rest, 'utf8'); restored.push(fpath); console.log('WROTE', fpath); } catch(err){ console.error('ERR', fpath, err.message); }
  }

  if(restored.length){
    try{ run('git', ['add','-A']); run('git', ['commit','-m','chore(recover): restore lost source files (excluding product images/data)']); console.log('COMMITTED', restored.length,'files'); } catch(e){ console.error('COMMIT FAILED', e.message); }
  } else console.log('No files restored');
}catch(err){
  console.error('Recovery failed:', err && err.message ? err.message : err);
  process.exit(1);
}
