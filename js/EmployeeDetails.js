class EmployeePayRoll 
{
   // getter and setter method
   get id() { return this._id; }
   set id(id) { 
     this._id = id; 
   }
 
   get name() { return this._name; }
   set name(name) { 
     let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
     if (nameRegex.test(name))
       this._name = name; 
     else throw 'Name is Incorrect!';
   }
 
   get profilePic() { return this._profilePic; }
   set profilePic(profilePic) { 
     this._profilePic = profilePic; 
   }
 
   get gender() { return this._gender; }
   set gender(gender) { 
     this._gender = gender; 
   }
 
   get department() { return this._department; }
   set department(department) { 
     this._department = department; 
   }
 
   get salary() { return this._salary; }
   set salary(salary) { 
     this._salary = salary; 
   }
 
   get phoneNumber() { return this._phoneNumber; }
   set phoneNumber(phoneNumber) { 
     let phoneRegex = RegExp1('^[0-9]{2}\\s[0-9]{10}$') 
     if (phoneRegex.test(phoneNumber))
     this._phoneNumber = phoneNumber; 
     else throw 'Phone Number is Incorrect !' ;
   }
 
   get birthDate() { return this._birthDate; }
   set birthDate(birthDate) { 
   
    this._birthDate = birthDate; 
  }
  get emailId() { return this._emailId; }
   set emailId(emailId) { 
     let emailRegex = RegExp2('^(abc).?[a-z]{3,}[@][a-z]{5,}.?[a-z]{2,}$') 
     if (emailRegex.test(emailId))
     this._emailId = emailId; 
     else throw 'Email Id is Incorrect !' ;
   }
  
 
   toString() {
    
     const empDate = !this.birthDate ? "undefined" : 
                     this.birthDate;
     return "id=" + this.id + ", name= " + this.name + ", gender= " + this.gender + 
            ", profilePic='" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ", birthDate=" + empDate + ", phoneNumber=" + this.phoneNumber + ", emailId=" + this.emailId;
   }
}