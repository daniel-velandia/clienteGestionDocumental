const API_URL = "http://localhost:port";

export const CREATE_STUDENT_POST_ENDPOINT = API_URL + "/student";
export const LIST_STUDENT_GET_ENDPOINT = API_URL + "/student";
export const SEARCH_STUDENT_DOCUMENTS_GET_ENDPOINT = API_URL + "/student/mydocuments";

export const CREATE_MANAGER_POST_ENDPOINT = API_URL + "/addressee";
export const LIST_MANAGER_GET_ENDPOINT = API_URL + "/addressee";

export const CREATE_COMPANY_POST_ENDPOINT = API_URL + "/company";
export const LIST_COMPANY_GET_ENDPOINT = API_URL + "/company";
export const SEARCH_COMPANY_DOCUMENTS_GET_ENDPOINT = API_URL + "/company/mydocuments";

export const CREATE_DOCUMENT_POST_ENDPOINT = API_URL + "/document";
export const LIST_DOCUMENT_GET_ENDPOINT = API_URL + "/document";
export const FETCH_FILE_GET_ENDPOINT = API_URL + "/document/file";

export const LIST_LAST_DOCUMENTS_ADDED_GET_ENDPOINT = API_URL + "/user/mydocuments";