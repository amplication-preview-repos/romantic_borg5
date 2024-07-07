import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="Reviewer" source="reviewer" />
        <TextInput label="Reviewee" source="reviewee" />
      </SimpleForm>
    </Edit>
  );
};
