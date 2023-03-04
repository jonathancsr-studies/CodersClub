import { render, screen, waitFor } from "@testing-library/react";
import nock from "nock";
import App from "../App";
import { Providers } from "../Providers";
import { topMangas } from "../__mocks__/topMangas";

nock("https://api.jikan.moe/v4")
  .persist()
  .defaultReplyHeaders({
    "access-control-allow-origin": "*",
  })
  .get("/top/manga")
  .reply(200, topMangas);

test("renders mangas successfully", async () => {
  render(
    <Providers>
      <App />
    </Providers>
  );
  const firstTopManga = topMangas.data[0];

  await waitFor(() => {
    const firstElement = screen.getByText(firstTopManga.title);
    return expect(firstElement).toBeInTheDocument();
  });
});

test("favoritate manga successfully", async () => {
  render(
    <Providers>
      <App />
    </Providers>
  );
  const firstTopManga = topMangas.data[0];
  const secondTopManga = topMangas.data[1];

  const favoritateFirstMangaButton = screen.getByTestId(
    `Favorite-Button-${firstTopManga.mal_id}`
  );
  const showFavoriteMangasButton = screen.getByText(/Show Favorites/i);

  favoritateFirstMangaButton.click();
  showFavoriteMangasButton.click();

  await waitFor(() => {
    const firstMangaElement = screen.getByText(firstTopManga.title);
    expect(firstMangaElement).toBeInTheDocument();
  });

  await waitFor(() => {
    const secondMangaElement = screen.queryByText(secondTopManga.title);
    expect(secondMangaElement).not.toBeInTheDocument();
  });
});
it("Match Snapshot", async () => {
  const { container } = render(
    <Providers>
      <App />
    </Providers>
  );
  await waitFor(() => {
    expect(container).toMatchSnapshot();
  });
});
