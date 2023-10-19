
export default (sizeBytes) => {

    const units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

    let index = 0, convertSize = parseInt(sizeBytes, 10) || 0;

    while(convertSize >= 1024 && ++index){
        convertSize = convertSize/1024;
    }
    
    return(convertSize.toFixed(convertSize < 10 && index > 0 ? 1 : 0) + ' ' + units[index]);
}