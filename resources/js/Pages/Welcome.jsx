

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <div className="relative d-flex flex-sm-row justify-content-center align-items-center min-vh-100 bg-light">
        <div className="position-fixed top-0 end-0 p-6 text-end">
          {auth.user ? (
            <Link
              to="/dashboard"
              className="font-semibold text-secondary text-decoration-none"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="font-semibold text-secondary text-decoration-none"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="ms-4 font-semibold text-secondary text-decoration-none"
              >
                Register
              </Link>
            </>
          )}
        </div>
    </div>
    </>
  )
          }
