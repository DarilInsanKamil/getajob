export type DataJob = {
    id: string,
    title: string,
    job_description: string,
    job_qualification: string,
    job_type: string,
    job_tenure: string,
    job_status: string,
    company_name: string,
    company_image_url: string,
    company_city: string,
    salary_min: string,
    salary_max: string,
}
export type TestimoniData = {
    id: number | string,
    name: string,
    comment: string
}
export type CategoryJobData = {
    id: string | number,
    type: string
}