import { BlogBuilder } from "@/components/ui/builder";
import React from "react";

const ViewPostPage = ({ params }: any) => {
    const { slug } = params;
    return (
        <BlogBuilder slug={slug} blogType="blogs"/>
    );
};

export default ViewPostPage;
