import React from "react";
import { Formik, Field, Form } from "formik";
import {
  TextField,
  Button,
  Card,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

const styles = makeStyles({
  card: {
    width: 320,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50
  },
  inputStyles: {
    margin: 5,
    width: "80%"
  },
  buttonStyles: {
    background: "#b3e5fc",
    width: "80%"
  }
});

const customTextField = props => {
  const classes = styles();
  return (
    <TextField
      id={props.name}
      className={classes.inputStyles}
      label={
        props.name === "firstName" ? "Enter First Name" : "Enter Last Name"
      }
      {...props}
    />
  );
};

const customSwitch = props => {
  return (
    <FormControlLabel
      control={<Switch value="checkedB" color="primary" />}
      label="Primary"
    />
  );
};

function App() {
  const classes = styles();
  return (
    <div className="App">
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <>
            <Card className={classes.card}>
              <Form>
                <Field type="text" name="firstName" as={customTextField} />
                <div>
                  <Field type="text" name="lastName" as={customTextField} />
                </div>
                <div>
                  <Field type="checkbox" name="check" as={customSwitch} />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={classes.buttonStyles}
                >
                  Submit
                </Button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            </Card>
          </>
        )}
      </Formik>
    </div>
  );
}

export default App;
