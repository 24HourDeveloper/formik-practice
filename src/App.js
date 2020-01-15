import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const styles = makeStyles({
  card: {
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50
  }
});

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
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  as={TextField}
                />
                <div>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    as={TextField}
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
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
