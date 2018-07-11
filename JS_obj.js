let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 var index;
 for (let key in users){
     index = 0;
     console.log(key.toUpperCase());
      
      for (let value in users[key]){
        index++;
        let string = users[key][value];
       // console.log(string.length)
       first_name = users[key][value].first_name.toUpperCase();
       last_name=users[key][value].last_name.toUpperCase();
      
      console.log(index,`${first_name}- ${last_name}`,string.length);// length is not working ! i don't know why 

 }
}