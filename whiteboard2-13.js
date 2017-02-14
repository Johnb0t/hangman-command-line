//WRite a function greatThanThree that takes in two numbers and returns true if they are greater then 3 and false if they are less than 3.


function greatThanThree(numOne, numTwo) {
	var notThese = [0,1,2,3];
	if ((Math.abs(numOne) != numOne)) || ((Math.abs(numTwo) !- numTwo)) return false;
	if (notThese.indexOf(numOne) > -1) || (notThese.indexOf(numTwo) > -1) return false;
	return true;

}

SQL

1. SELECT *
2. FROM products;


1. SELECT *
FROM products
left join departments
on products.departmend_id =department.id 

3. select s.quantity, p.name as product_name, u.name as username, d.name as department_name
from sales skeft join products p 
on p.id = s.product_id
left join users u
on u.id = s.user_id
left join departments d
on d.id = p.department_id



