

#target photoshop

/*

* filename: ps-save-layer-text-to-file.jsx

* s cript by Jie Tsui (macparno(a)gmail.com)

* http://blog.imwebs.com/article.asp?id=611

* 2013-11-11

*/



function main(){

   if(!documents.length) return;

   var doc=activeDocument;    

   var f=File.saveDialog ("保存为文本文件", "文本文件:*.txt");

   if(f){

       f.open("a");

       f.write(scanLayerSets(doc));

       f.close();

       alert("所有图层上的文本已保存到文件："+f.fullName);

   }

}



function scanLayerSets(el){

var mystr="";

   for(var a=0; a<el.layerSets.length;a++){

       var ly=el.layerSets[a].typename;

       if(ly=="LayerSet"){                

           mystr+=scanLayerSets(el.layerSets[a]);

           }

       }



   for(var j=0;j<el.artLayers.length;j++){

       var lk=el.artLayers[j].kind;

       if(lk=="LayerKind.TEXT"){

               mystr+=el.artLayers[j].textItem.contents + "\n";

               }

       }

   //alert(mystr)

   return mystr;

}



main();

