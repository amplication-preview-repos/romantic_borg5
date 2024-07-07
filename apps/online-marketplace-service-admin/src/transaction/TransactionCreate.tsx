import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { AdTitle } from "../ad/AdTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="totalPrice" source="totalPrice" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Buyer" source="buyer" />
        <TextInput label="Seller" source="seller" />
        <ReferenceInput source="ad.id" reference="Ad" label="Ad">
          <SelectInput optionText={AdTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
