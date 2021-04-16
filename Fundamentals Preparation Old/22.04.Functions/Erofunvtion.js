var st= {
name: 'Gosho',
getName: function(){
    gName = () => this.name;
    return gName ();
}  
};
console.log(st.getName);
