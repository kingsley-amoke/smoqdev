import { developer } from "../data/developer";

function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p>
        <strong>Email:</strong> {developer.email}
        <br />
        <strong>Developer:</strong> {developer.name}
        <br />
        <strong>Address:</strong> {developer.address}
        <br />
        <strong>Response Time:</strong> Within 48 hours
      </p>
    </div>
  );
}

export default Contact;
