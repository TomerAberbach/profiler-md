defmodule Profile do
  # eflambe traces every function call, so encoding/decoding the whole ~600 KB
  # document produces a >100 MB trace; one status keeps the capture a few MB.
  def doc(path) do
    path |> File.read!() |> Jason.decode!() |> Map.fetch!("statuses") |> hd()
  end

  def run(doc) do
    Enum.reduce(1..5, doc, fn _i, acc ->
      json = Jason.encode!(acc)
      Jason.decode!(json)
    end)
  end
end
