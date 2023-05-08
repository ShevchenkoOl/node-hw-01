const { Command } = require("commander");
const program = new Command();


const contactService = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contactService.listContacts();
      return console.log(listContacts);

    case "getContactById":
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);

    case "removeContact":
      const removeContact = await contactService.removeContact(id);
      return console.log(removeContact);

    case "addContact":
      const newContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);

    default:
      console.warn("Unknown action type!");
  }
};

//invokeAction({ action: "list" });
// invokeAction({ action: "getContactById", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({
//   action: "addContact",
//   name: "Eliska Novakova",
//   email: "resenmf@gmail.com",
//   phone: "(420) 775-9887",
// });
// invokeAction({
//   action: "removeContact",
//   id: "KFitb52qzvhx6n_-MUMFH"
// });

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

  program.parse();

  const options = program.opts();
  invokeAction(options);