import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="rating" source="rating" />
        <TextField label="comment" source="comment" />
        <TextField label="Reviewer" source="reviewer" />
        <TextField label="Reviewee" source="reviewee" />
      </SimpleShowLayout>
    </Show>
  );
};