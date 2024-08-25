import React, { useState } from "react";
import { Menu, Input, Button } from "semantic-ui-react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3012";

    try {
      const response = await axios.post(`${apiUrl}/subscribe`, {
        email,
      });
      alert(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

  return (
    <Menu>
      <Menu.Item
        name="home"
        style={{
          backgroundColor: "lightgrey",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Sign Up for Our Daily Insider
      </Menu.Item>
      <Menu.Item
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightgrey",
        }}
      >
        <form
          id="subscribe-form"
          style={{ width: "100%", maxWidth: "800px" }}
          onSubmit={handleSubmit}
        >
          <Input
            icon="mail"
            placeholder="Enter Your Email"
            style={{ width: "100%", backgroundColor: "white" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" color="grey" style={{ marginLeft: "10px" }}>
            Subscribe
          </Button>
        </form>
      </Menu.Item>
    </Menu>
  );
};

export default SignUp;
