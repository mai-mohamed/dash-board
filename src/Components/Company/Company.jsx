import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {addCompanyAction} from "../../Store/Company/ActionCreator"
import CommonBtn from "../Common/Buttons";
import CommonInputText from "../Common/InputText";

function Company(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      slogan: "",
    },
    onSubmit: (values) => {
      console.log(values);
      props.addCompanyAction(values)
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <CommonInputText
          name="name"
          label="company Name"
          handleChange={formik.handleChange}
        />
        <h1>date picker & drop down</h1>
        <CommonInputText
          name="slogan"
          label="Company Slogan"
          handleChange={formik.handleChange}
        />
        <CommonBtn name="Add" type="submit" color="primary" size="small" />
      </form>
    </div>
  );
}

export default connect(null,{addCompanyAction})(Company);
