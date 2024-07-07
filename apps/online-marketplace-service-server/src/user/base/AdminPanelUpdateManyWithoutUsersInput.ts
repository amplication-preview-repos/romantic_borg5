/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AdminPanelWhereUniqueInput } from "../../adminPanel/base/AdminPanelWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AdminPanelUpdateManyWithoutUsersInput {
  @Field(() => [AdminPanelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminPanelWhereUniqueInput],
  })
  connect?: Array<AdminPanelWhereUniqueInput>;

  @Field(() => [AdminPanelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminPanelWhereUniqueInput],
  })
  disconnect?: Array<AdminPanelWhereUniqueInput>;

  @Field(() => [AdminPanelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminPanelWhereUniqueInput],
  })
  set?: Array<AdminPanelWhereUniqueInput>;
}

export { AdminPanelUpdateManyWithoutUsersInput as AdminPanelUpdateManyWithoutUsersInput };
