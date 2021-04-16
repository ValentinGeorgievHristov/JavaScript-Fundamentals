function load(percentage) {
    let result = '';
    let result1 = '';
    switch (percentage) {
        case 10:
            result = '10% [%.........]';
            result1 = 'Still loading...';
            break;
        case 20:
            result = '20% [%%........]';
            result1 = 'Still loading...';
            break;
        case 30:
            result = '30% [%%%.......]';
            result1 = 'Still loading...';
            break;
        case 40:
            result = '40% [%%%%......]';
            result1 = 'Still loading...';
            break
        case 50:
            result = '50% [%%%%%.....]';
            result1 = 'Still loading...';
            break;
        case 60:
            result = '60% [%%%%%%....]'
            result1 = 'Still loading...';
            break;
        case 70:
            result = '70% [%%%%%%%...]'
            result1 = 'Still loading...';
            break;
        case 80:
            result = '80% [%%%%%%%%..]'
            result1 = 'Still loading...';
            break
        case 90:
            result = '90% [%%%%%%%%%.]'
            result1 = 'Still loading...';
            break
        case 100:
            result = '100% Complete!'
            result1 ='[%%%%%%%%%%]'
            break;
            



    }
console.log(result);
console.log(result1);


}
load(30);