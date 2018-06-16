import {Credentials} from '../credentials';
export class SharedIniFileCredentials extends Credentials {
    /**
     * Creates a new SharedIniFileCredentials object.
     */
    constructor(options?: SharedIniFileCredentialsOptions);
}

interface SharedIniFileCredentialsOptions {
    profile?: string
    filename?: string
    disableAssumeRole?: boolean
    tokenCodeFn?: (mfaSerial: string, callback: (err: string|null|undefined, token: string) => void) => void
}
