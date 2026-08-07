// ls.js by xfan
lsLoad=a=>{try{return JSON.parse(localStorage.getItem(a))}catch(b){return localStorage.getItem(a)}};
lsSave=(a,b)=>localStorage.setItem(a,b&&typeof b=='object'?JSON.stringify(b):b);
lsRemove=a=>localStorage.removeItem(a);
lsClear=_=>localStorage.clear();
