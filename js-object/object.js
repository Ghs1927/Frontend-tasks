let institute = {
  name: "Innomatics Research Labs",
  course: {
    frontend: "HTML, CSS, JavaScript",
    backend: "Python Full Stack",
    address: {
      state: "Telangana",
      district: "Sangareddy",
      village: "JNTU",
    },
  },
};

// CREATE
institute.course.duration = "6 Months";
console.log("After Adding Duration:");
console.log(institute);

// READ
console.log("Institute:", institute.name);
console.log("Backend Course:", institute.course.backend);
console.log("Location:", institute.course.address.village);

// UPDATE
institute.course.frontend = "HTML, CSS, Bootstrap, JavaScript";
institute.course.address.district = "Hyderabad";
console.log("After Updating:");
console.log(institute);

// DELETE
delete institute.course.address.village;
console.log("After Deleting:");
console.log(institute);
