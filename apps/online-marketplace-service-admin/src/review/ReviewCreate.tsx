import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="Reviewer" source="reviewer" />
        <TextInput label="Reviewee" source="reviewee" />
      </SimpleForm>
    </Create>
  );
};
