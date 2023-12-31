interface IResource {
    url: string;
    description: string;
    tags: string[];
}

interface IResourceResponse {
    id: string;
    createdAt: string;
}

export type Resource = IResource;
export type ResourceResponse = IResource & IResourceResponse;
