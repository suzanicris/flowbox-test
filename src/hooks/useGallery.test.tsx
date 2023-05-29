import { renderHook } from "@testing-library/react";
import { useGallery } from "./useGallery";

describe("useGallery", () => {
  it("returns the gallery context", () => {
    const { result } = renderHook(() => useGallery());

    expect(result.current).toMatchInlineSnapshot(`
Object {
  "fail": false,
  "loading": false,
  "photos": Array [],
  "toggleUseMock": [Function],
  "useMock": false,
}
`)
  });
});
