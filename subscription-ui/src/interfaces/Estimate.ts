export interface Estimate {
    subscriptionId: string;
    cleanroomId:    string;
    name:           string;
    status:         string;
    created:        Date;
    modified:       Date;
    query:          string;
    count:          any[];
    sample:         any[];
}
