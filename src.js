class File {
  constructor(data, mimetype) {
    this.b = new Blob([data], {type:mimetype})
    this.url = URL.createObjectURL(this.b)
  }
  
  download(filename) {
    let a = document.createElement("a");
    a.href = this.url;
    a.download = filename;
    a.click()
  }
}

class FileWC {
  constructor(chunks, mimetype) {
    this.b = new Blob(chunks, {type:mimetype})
    this.url = URL.createObjectURL(this.b)
  }
  
  download(filename) {
    let a = document.createElement("a");
    a.href = this.url;
    a.download = filename;
    a.click()
  }
}

dl = {
  Downloader: class {
    downloadURL(url,filename) {
      fetch(url).then(res=>res.blob()).then(data=>{
        let a = document.createElement("a");
        a.href = URL.createObjectURL(data);
        a.download = filename;
        a.click()
      })
    }
  }
}
