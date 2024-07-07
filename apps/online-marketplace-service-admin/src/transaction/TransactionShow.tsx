import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { AD_TITLE_FIELD } from "../ad/AdTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="totalPrice" source="totalPrice" />
        <TextField label="status" source="status" />
        <TextField label="Buyer" source="buyer" />
        <TextField label="Seller" source="seller" />
        <ReferenceField label="Ad" source="ad.id" reference="Ad">
          <TextField source={AD_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
