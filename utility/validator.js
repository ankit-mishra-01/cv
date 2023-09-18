export function validator() {}

export const isEmail = (email) => {

  email = email?.trim();
  let messages = [];
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Define a regular expression pattern for a valid email address

  // Use the test method of the regular expression to check if the email matches the pattern
  if (!emailPattern.test(email)) {
    messages.push("Please enter a valid email!");
  }

  if (messages.length > 0) {
    return messages;
  } else {
    return true;
  }
};

export const isName = (name) => {
  name = name?.trim();
  let messages = [];
  if (name?.length > 0) {
    return true;
  } else {
    messages.push("Please enter your name!");
    return messages;
  }
};
  

export const isPassword = ( password ) => {
  // Check if the password is at least 8 characters long
    password = password?.trim();
    let messages=[];
    if (!password || password?.length < 8)   
    {
        messages.push("Your password should be at least 8 character long")
    }


    // Check if the password contains at least 1 numeric character
    if (!password || !/\d/.test(password)) {
        messages.push("Your password should have at least 1 numeric digit")
    }
     // Check if the password contains at least 1 alphabet
     if (!password || !/[a-zA-Z]/.test(password)) {
        messages.push("Your password should have at least 1 alphabet")
     }

    // Check if the password contains at least 1 special symbol
    if (!password || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
         messages.push("Your password should have at least 1 special symbol such as @ # ! * etc.")
    }

    // If all checks pass, the password is valid
    if (messages.length > 0) {
      return messages;
    } else {
      return true;
    }
  }

export const isSubject = (subject) => {
  let messages=[]
  subject = subject?.trim();
  if (subject && subject.length > 0) {
    return true;
  }
  messages.push("Please enter subject")
  return messages;
};

export const isDescription = (description) => {
  let messages=[]
  if (description && description.length > 0) {
    return true;
  }
  messages.push("Please enter description")
  return messages;
};


export const isMobile = (mobile) => {
  let messages=[]
  let regexp=/^\d{7,15}$/
  if (mobile && regexp.test(mobile)) {
    return true;
  }
  messages.push('Please provide valid mobile number')
  return messages;
};

export const isCountry = (country) => {
  let messages=[]
  if (country && country.length>0) {
    return true;
  }
  messages.push('Please select a country')
  return messages;
};
