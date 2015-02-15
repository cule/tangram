
// batch_export.js
// rough draft of batch tile export from Tangram -
// prepares tiles for conversion by vbo-export
//
// TODO:
// take in a selection of tiles from landgrab and pass files/data directly to vbo-export
//

delay = 10000; // milliseconds

window.exportVBO = function (callback) {

mytiles = [{'x': 9650.0, 'y': 12317.0, 'z': 15},
 {'x': 9651.0, 'y': 12316.0, 'z': 15},
 // {'x': 9648.0, 'y': 12318, 'z': 15}];
 {'x': 9648.0, 'y': 12318, 'z': 15},
 {'x': 9647.0, 'y': 12317.0, 'z': 15},
 {'x': 9650.0, 'y': 12319.0, 'z': 15},
 {'x': 9651.0, 'y': 12314.0, 'z': 15},
 {'x': 9649.0, 'y': 12315, 'z': 15},
 {'x': 9654.0, 'y': 12305.0, 'z': 15},
 {'x': 9654.0, 'y': 12311.0, 'z': 15},
 {'x': 9654.0, 'y': 12304.0, 'z': 15},
 {'x': 9651.0, 'y': 12313, 'z': 15},
 {'x': 9647.0, 'y': 12316.0, 'z': 15},
 {'x': 9648, 'y': 12317.0, 'z': 15},
 {'x': 9650.0, 'y': 12320.0, 'z': 15},
 {'x': 9649.0, 'y': 12318, 'z': 15},
 {'x': 9653.0, 'y': 12313.0, 'z': 15},
 {'x': 9653.0, 'y': 12305.0, 'z': 15},
 {'x': 9652.0, 'y': 12308, 'z': 15},
 {'x': 9649, 'y': 12317.0, 'z': 15},
 {'x': 9648.0, 'y': 12314.0, 'z': 15},
 {'x': 9650.0, 'y': 12312, 'z': 15},
 {'x': 9651.0, 'y': 12307.0, 'z': 15},
 {'x': 9652.0, 'y': 12313.0, 'z': 15},
 {'x': 9654.0, 'y': 12303.0, 'z': 15},
 {'x': 9654.0, 'y': 12300.0, 'z': 15},
 {'x': 9649.0, 'y': 12316, 'z': 15},
 {'x': 9648.0, 'y': 12315, 'z': 15},
 {'x': 9647.0, 'y': 12315.0, 'z': 15},
 {'x': 9654.0, 'y': 12307.0, 'z': 15},
 {'x': 9647, 'y': 12320.0, 'z': 15},
 {'x': 9648.0, 'y': 12312.0, 'z': 15},
 {'x': 9649.0, 'y': 12320.0, 'z': 15},
 {'x': 9648.0, 'y': 12313.0, 'z': 15},
 {'x': 9650.0, 'y': 12314, 'z': 15},
 {'x': 9656.0, 'y': 12301.0, 'z': 15},
 {'x': 9652, 'y': 12311.0, 'z': 15},
 {'x': 9654.0, 'y': 12310.0, 'z': 15},
 {'x': 9647.0, 'y': 12314.0, 'z': 15},
 {'x': 9650.0, 'y': 12316.0, 'z': 15},
 {'x': 9652.0, 'y': 12309, 'z': 15},
 {'x': 9650.0, 'y': 12310.0, 'z': 15},
 {'x': 9646.0, 'y': 12321.0, 'z': 15},
 {'x': 9648.0, 'y': 12321.0, 'z': 15},
 {'x': 9652.0, 'y': 12312, 'z': 15},
 {'x': 9653.0, 'y': 12306, 'z': 15},
 {'x': 9655.0, 'y': 12301, 'z': 15},
 {'x': 9651, 'y': 12309.0, 'z': 15},
 {'x': 9650.0, 'y': 12313, 'z': 15},
 {'x': 9653, 'y': 12309.0, 'z': 15},
 {'x': 9651.0, 'y': 12315.0, 'z': 15},
 {'x': 9646.0, 'y': 12319.0, 'z': 15},
 {'x': 9647.0, 'y': 12319.0, 'z': 15},
 {'x': 9653.0, 'y': 12311.0, 'z': 15},
 {'x': 9653.0, 'y': 12303.0, 'z': 15},
 {'x': 9650.0, 'y': 12309.0, 'z': 15},
 {'x': 9652.0, 'y': 12314.0, 'z': 15},
 {'x': 9654.0, 'y': 12306.0, 'z': 15},
 {'x': 9654.0, 'y': 12309.0, 'z': 15},
 {'x': 9650.0, 'y': 12311, 'z': 15},
 {'x': 9648, 'y': 12316.0, 'z': 15},
 {'x': 9649.0, 'y': 12312.0, 'z': 15},
 {'x': 9654.0, 'y': 12308.0, 'z': 15},
 {'x': 9656.0, 'y': 12302.0, 'z': 15},
 {'x': 9653.0, 'y': 12302.0, 'z': 15},
 {'x': 9647.0, 'y': 12318.0, 'z': 15},
 {'x': 9655.0, 'y': 12302.0, 'z': 15},
 {'x': 9655.0, 'y': 12300.0, 'z': 15},
 {'x': 9648, 'y': 12319.0, 'z': 15},
 {'x': 9652.0, 'y': 12307.0, 'z': 15},
 {'x': 9651.0, 'y': 12308.0, 'z': 15},
 {'x': 9653, 'y': 12307.0, 'z': 15},
 {'x': 9649, 'y': 12314.0, 'z': 15},
 {'x': 9650.0, 'y': 12315, 'z': 15},
 {'x': 9654.0, 'y': 12301.0, 'z': 15},
 {'x': 9649.0, 'y': 12313, 'z': 15},
 {'x': 9652.0, 'y': 12306.0, 'z': 15},
 {'x': 9649.0, 'y': 12311.0, 'z': 15},
 {'x': 9655.0, 'y': 12303.0, 'z': 15},
 {'x': 9653.0, 'y': 12304.0, 'z': 15},
 {'x': 9651, 'y': 12311.0, 'z': 15},
 {'x': 9646.0, 'y': 12320.0, 'z': 15},
 {'x': 9648.0, 'y': 12320.0, 'z': 15},
 {'x': 9656.0, 'y': 12300.0, 'z': 15},
 {'x': 9650.0, 'y': 12318.0, 'z': 15},
 {'x': 9653, 'y': 12310.0, 'z': 15},
 {'x': 9653.0, 'y': 12312.0, 'z': 15},
 {'x': 9650.0, 'y': 12308.0, 'z': 15},
 {'x': 9649.0, 'y': 12310.0, 'z': 15},
 {'x': 9651.0, 'y': 12312, 'z': 15},
 {'x': 9649, 'y': 12319.0, 'z': 15},
 {'x': 9651.0, 'y': 12310, 'z': 15},
 {'x': 9654.0, 'y': 12302.0, 'z': 15},
 {'x': 9652.0, 'y': 12310, 'z': 15},
 {'x': 9653, 'y': 12308.0, 'z': 15},
 {'x': 9652.0, 'y': 12305.0, 'z': 15},
 {'x': 9647.0, 'y': 12321.0, 'z': 15}];

// find tile range
min = {x: Infinity, y: Infinity};
max = {x:-Infinity, y: -Infinity};
for (t in mytiles) {
  mt = mytiles[t];
  // console.log(mt);
  // console.log(min);
  // console.log(max);

  min.x = Math.min(min.x, mt.x);
  min.y = Math.min(min.y, mt.y);
  max.x = Math.max(max.x, mt.x);
  max.y = Math.max(max.y, mt.y);
}
console.log("min:", min);
console.log("max:", max);
console.log("mytiles", mytiles);
console.log("scene._loadTile", scene._loadTile);

for (t in mytiles) { console.log(mytiles[t]);scene._loadTile(mytiles[t]); }

// prepare a list of vbos
vbos = [];

// wait for the _loadTile functions to complete
setTimeout(function(){
  for (t in mytiles) {
    mt = mytiles[t];
    coords = mt.x+"/"+mt.y+"/"+mt.z;

    // calculate offset relative to the extents of the tile batch -
    // the top-left tile is 0,0 - one tile over is 1,0 - one tile down is 0,1
    offset = {x: mt.x - min.x, y: mt.y - min.y};
    // multiply the offset by the local tile coordinate range for vertex position offset
    offset.x *= 4096;
    offset.y *= 4096;
    // console.log("coords", coords);
    // console.log("offset", offset);
    // console.log(scene.tiles[coords]);
    // console.log(scene.tiles);
    while (!scene.tiles[coords].meshes.polygons.vertex_data) {
      setTimeout(function(){return;}, 1000);
    }
    verts = Array.prototype.slice.call(new Float32Array(scene.tiles[coords].meshes.polygons.vertex_data));
    length = verts.length / 9;
    console.log("length:", length)

    // apply offset to tile vertices
    for (v in verts) {
        if (v % 9 == 0) verts[v] += offset.x;
        if (v % 9 == 1) verts[v] -= offset.y;
    }

    // make it one long string
    verts = verts.join('\n');
    // add it to file list for zipping
    vbos.push(verts);
  }

  var zip = new JSZip();
  vbos = window.vbos;
  console.log("compressing "+vbos.length+" files...");
  for (file in vbos) {
    zip.file("file"+file, vbos[file]);
  }
  if (JSZip.support.blob) {
    try {
  var blob = zip.generate({type:"blob"});
      // uses FileSaver.js
      saveAs(blob, "tiles.zip");
    } catch(e) {
      blobLink.innerHTML += " " + e;
    }
  }
  console.log("Done!")

}, delay);

}