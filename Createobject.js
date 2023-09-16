
let students1_name ="hafe";
        let students1_class = 6;
        let students1_division ="A";


        let students2_name ="jjjj";
        let students2_class = 6;
        let students2_division ="A";

        let students3_name ="hafeez";
        let students3_class = 6;
        let students3_division ="A";

        let students = {
          name:"hafe",
          class: 6,
          division:"A",
        };

        let students2 = {
          name:"jjjj",
          class: 6,
          division:"A",
        };

        let students3 = {
          name:"hafeez",
          class: 6,
          division:"A",
        };

       
          console.log(students.name);
          console.log(students.class);
          console.log(students.division);
  
          students.last_name = "done";
          console.log(students)
  
          delete students.name;
          console.log(students)
      
      
        delete students.name;
        console.log(students)


        let students4 = {
          name:"hafeez",
          class: 6,
          division:"A",
        };
        console.log(students4.class);
        console.log(students4.name);
        console.log(students4.division);

        students4.last_name = "jooooo"
        console.log(students4)

        delete students4.name;
        console.log(students4)