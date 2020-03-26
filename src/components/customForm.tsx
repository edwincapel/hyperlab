import React, { useState } from "react";
import {
  ThemeProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/core";


interface Props {
  websiteInput: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function CustomForm(props: Props) {
  const { websiteInput, handleChange, handleSubmit } = props

  return (
    <form
      onSubmit={handleSubmit}
    >
      <FormControl>
        <FormLabel htmlFor="website">Check if website Exist</FormLabel>
        <Input
          value={websiteInput}
          type="text"
          id="website"
          aria-describedby="website-helper-text"
          onChange={handleChange}
        />
        {/* <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText> */}
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}
