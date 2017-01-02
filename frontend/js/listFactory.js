angular.module("listApp")
	.factory("list", ListFactory);

ListFactory.$inject = ["$resource"];

function ListFactory($resource) {
	return $resource("http://localhost:3000/list/:id");
}