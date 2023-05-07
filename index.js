// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

const contactService = require ("./contacts");
console.log(contactService);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
        const listContacts = await contactService.listContacts();
        return console.log(listContacts);
      
    case "getContactById":
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);

    case "removeContact":
      const deleteContact = await contactService.removeContact(id);
      return console.log(deleteContact);

    case "addContact":
      const newContact = await contactServic.addContact(id, {name, email, phone});
      return console.log(newContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction({action: "list"});

