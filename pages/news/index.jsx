import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

const index = () => {
  return (
    <div>
      <Link href="news/add">
        <Button variant="contained"> add</Button>
      </Link>
    </div>
  );
};

export default index;
