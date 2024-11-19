import fs from 'fs';

function readLipsumFile() { 
    fs.readFile('lipsum.txt', 'utf8', (err, data) => { 
        if (err) { 
            console.error('Error reading file:', err);
        } else { 
            console.log('File content:', data.toUpperCase()); 
        } 
    }); 
} 

function upper(){
    // let content=readLipsumFile().toUpperCase
    fs.readFile('lipsum.txt', 'utf8', (err, data) => { 
        if (err) { 
            console.error('Error reading file:', err);
        } else { 
            console.log('reading file completed');
            // var content=data.toUpperCase() 

            fs.writeFile('upper.txt',data.toUpperCase(),(err)=>{
                if (err){
                    console.error('error in writing file; ', err);
                } else{
                    console.log('file is written successfully')
                    fs.writeFile('filenames.txt','upper.txt',(err)=>{
                        if (err){
                            console.error('error in writing file')
                        }else{
                            console.log('upper.txt file appended successfully')


                            let d=String(data).toLowerCase()
                            let content=d.replaceAll(",",'\n')
                            fs.writeFile('lower.txt',content,(err)=>{
                                if (err){
                                    console.error('error in writing file; ', err);
                                } else{
                                    console.log('file is written successfully')
                                    fs.appendFile('filenames.txt',' lower.txt',(err)=>{
                                        if (err){
                                            console.error('error in writing file')
                                        }else{
                                            console.log('lower.txt file appended successfully')
                                            


                                            // let l=[]
                                            fs.readFile('filenames.txt','utf8',(err,data)=>{
                                                
                                                // const fs = require('fs');

                                                let files = data.split(' ');
                                                console.log(files);
                                                let s = '';

                                                function readFileCallback(err, data, callback) {
                                                    if (err) {
                                                        console.log('Error in reading file: ', err);
                                                    } else {
                                                        s += data;
                                                    }
                                                    callback(); 
                                                }

                                                function readFiles(files, index, done) {
                                                    if (index >= files.length) {
                                                        done();
                                                        return;
                                                    }
                                                
                                                    fs.readFile(files[index], 'utf8', (err, data) => {
                                                        readFileCallback(err, data, () => {
                                                            readFiles(files, index + 1, done);
                                                        });
                                                    });
                                                }

                                                readFiles(files, 0, () => {
                                                    // console.log(s); 
                                                    let l=[]
                                                    l=s.split(' ')
                                                    l.sort();
                                                    content=l.join()
                                                    content = content.replaceAll(',',' ')
                                                    fs.writeFile('sort.txt',content,(err)=>{
                                                        if (err){
                                                            console.error('facing error in writing sort.txt file',err)
                                                        }
                                                        else{
                                                            console.log('content sorted in sort.txt file')
                                                        }
                                                    })

                                                });
 
                                                
                                                                                            
                    
                                            })
                                            
                                            
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

upper()
// readLipsumFile();
