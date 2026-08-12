import client from '../client/client';
import { CreateActivityLogDocument } from '../__generated__/graphql';

// Fire-and-forget audit logger used for PAGE_VIEW / CLICK events.
// Silently no-ops when unauthenticated and never throws into the caller.
export const logActivity = (
    Action: string,
    Page: string,
    Target?: string,
    Detail?: string,
) => {
    try {
        let token = '';
        try {
            token = localStorage.getItem('token') || '';
        } catch (e) {
            token = '';
        }

        if (token === '') {
            return;
        }

        client
            .mutate({
                mutation: CreateActivityLogDocument,
                variables: {
                    Action: Action,
                    Page: Page,
                    Target: Target || '',
                    Detail: Detail || '',
                },
                fetchPolicy: 'no-cache',
            })
            .catch(() => {
                // swallow — logging must never disrupt the app
            });
    } catch (e) {
        // swallow — logging must never disrupt the app
    }
};
