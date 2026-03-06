import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://sptechdigital.com",
            lastModified: new Date(),
        },
        {
            url: "https://sptechdigital.com/service",
            lastModified: new Date(),
        },
        {
            url: "https://sptechdigital.com/course",
            lastModified: new Date(),
        },
        {
            url: "https://sptechdigital.com/about",
            lastModified: new Date(),
        },
    ];
}