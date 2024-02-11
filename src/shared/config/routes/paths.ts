export enum AppRoutes {
    INDEX = 'index',
    DETAILS = 'details',
    NOT_FOUND = 'notFound'
}

export const paths: Record<AppRoutes, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.DETAILS]: '/:id',
    [AppRoutes.NOT_FOUND]: '*'
}
