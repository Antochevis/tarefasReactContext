import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PeopleContext } from "../../context/PeopleContext";

import FormComponent from '../../components/formPeople/FormComponent';
import { FormContainer } from "./People.Styled";


function PeopleForm() {
  const {pessoa, getPessoaById} = useContext(PeopleContext);
  const {id} = useParams();
  const [isUpdate, setIsUpdate] = useState(false);

  async function setup() {
    if (id) {
      setIsUpdate(true);
      getPessoaById(id)
    }
  }

  useEffect(() => {
    setup();
  }, []);

return (
    <FormContainer>
      <FormComponent isUpdate={isUpdate} people={pessoa} id={id} />
    </FormContainer>
)
}

export default PeopleForm