import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/sign-in', '/sign-up'],
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute)
      return redirectToSignIn({ returnBackUrl: req.url })

    // eslint-disable-next-line no-console
    console.log(auth, req)
  },
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
