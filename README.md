## Live Website

https://marvel-dashboard-ten.vercel.app/

## Running project locally

1. Install pnpm on your local computer by visiting the following website: \
 https://pnpm.io/installation.

2. Open the terminal on your local computer and clone this project:
```bash
git clone https://github.com/YWHo/marvel-dashboard.git
```

3. Navigate to the `marvel-dashboard` directory.

4. Create a .env.local file in the root directory of the project and add the API key to it.
```
MARVEL_ACCESS_PUBLIC_KEY=<your public API key>
MARVEL_ACCESS_PRIVATE_KEY=<your private API key>
```
> Note: Please obtain your API key from https://developer.marvel.com/.

5. Run the `pnpm install` command to retrieve the project dependencies.
```bash
pnpm install
```

6. Start the development server on your local computer:

```bash
pnpm dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
