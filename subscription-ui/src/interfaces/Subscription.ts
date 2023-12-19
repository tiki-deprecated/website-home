export interface SubscriptionType {
    subscriptionId: string;
    cleanroomId:    string;
    name:           string;
    status:         string;
    created:        Date;
    modified:       Date;
    query:          string;
    count:          CountSample[];
    sample:         CountSample[];
}

export interface CountSample {
    status:   string;
    total?:   number;
    created:  Date;
    modified: Date;
    records?: string[];
}
