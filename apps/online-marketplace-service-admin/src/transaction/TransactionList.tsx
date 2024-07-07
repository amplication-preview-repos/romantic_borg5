import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AD_TITLE_FIELD } from "../ad/AdTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
