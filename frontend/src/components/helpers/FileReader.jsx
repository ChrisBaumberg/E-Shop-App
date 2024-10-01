
export default function readFile({file}){
    let fileReader;

    const handleFileRead = (e) =>{
      const content = fileReader.result;
    } ;
  
    const handleFileChosen= (file)=>{
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }

    console.log(handleFileChosen(file))
}