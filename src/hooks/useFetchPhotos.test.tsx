import { renderHook, waitFor } from "@testing-library/react";
import { headers, url, useFetchPhotos } from "./useFetchPhotos";
import mockPhotos from "mocks/mockPhotos";

global.fetch = jest.fn();

describe("useFetchPhotos", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockReset();
  });

  it("fetches photos and sets loading and photos state", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockPhotos),
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useFetchPhotos());

    expect(result.current.photos).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.fail).toBe(false);

    await waitFor(() => {
      expect(result.current.photos).toEqual(mockPhotos);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.fail).toBe(false);

    expect(global.fetch).toHaveBeenCalledWith(url, { headers });
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
  });

  it("sets fail state when fetch request fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Failed to fetch"));

    const { result } = renderHook(() => useFetchPhotos());

    expect(result.current.fail).toBe(false);

    await waitFor(() => {
      expect(result.current.fail).toBe(true);
    });

    expect(global.fetch).toHaveBeenCalledWith(url, { headers });
  });
});
