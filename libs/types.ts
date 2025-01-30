export interface CategoryTypes {
  _id: string;
  name: string;
  description: string;
}

export interface JobTypes {
  id_: string;
  jobType: string;
  title: string;
  salary: number;
  category: string;
  remote: boolean;
  isPublised: boolean;
  requirements: string;
  benefits: string;
  address: string;
  city: string;
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  clerkId: string;
}
